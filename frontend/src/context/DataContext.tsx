import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import initialHomeData from '../assets/home-data.json';
import initialResumeData from '../assets/resume-data.json';

// Define context types
interface DataContextType {
    homeData: any;
    resumeData: any;
    loading: boolean;
    error: string | null;
    refreshData: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [homeData, setHomeData] = useState(initialHomeData);
    const [resumeData, setResumeData] = useState(initialResumeData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);

            // Fetch Home Data
            const homeRes = await fetch('http://localhost:3001/api/data/home');
            if (homeRes.ok) {
                const homeJson = await homeRes.json();
                setHomeData(homeJson.record || homeJson); // Handle JSONBin structure
            }

            // Fetch Resume Data
            const resumeRes = await fetch('http://localhost:3001/api/data/resume');
            if (resumeRes.ok) {
                const resumeJson = await resumeRes.json();
                setResumeData(resumeJson.record || resumeJson);
            }

        } catch (err) {
            console.error("Failed to fetch data, falling back to local:", err);
            setError("Failed to load live data. Showing cached version.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ homeData, resumeData, loading, error, refreshData: fetchData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
