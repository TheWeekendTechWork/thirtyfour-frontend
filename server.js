import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// JSONBin Configuration
const MASTER_KEY = '$2a$10$fn6Wr5jNMzlQBaSzVbXwzeT5oTxVylSXlpZpPl79LdYDDQxyKPRWW';
const HOME_BIN_ID = '69879036ae596e708f18eda4';
const RESUME_BIN_ID = '6987904a43b1c97be96d1964';

// Helper to fetch from JSONBin
const fetchBin = async (binId) => {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
        headers: {
            'X-Master-Key': MASTER_KEY,
            'X-Access-Key': MASTER_KEY // providing both just in case, though Master is usually enough for private
        }
    });
    if (!response.ok) throw new Error(`Failed to fetch bin ${binId}`);
    const data = await response.json();
    return data.record; // JSONBin v3 returns data wrapped in 'record'
};

// Helper to update JSONBin
const updateBin = async (binId, data) => {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': MASTER_KEY
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error(`Failed to update bin ${binId}`);
    return await response.json();
};

// --- API Endpoints ---

// Get Home Data
app.get('/api/data/home', async (req, res) => {
    try {
        const data = await fetchBin(HOME_BIN_ID);
        res.json(data);
    } catch (error) {
        console.error('Error fetching home data:', error);
        res.status(500).json({ error: 'Failed to fetch home data' });
    }
});

// Get Resume Data
app.get('/api/data/resume', async (req, res) => {
    try {
        const data = await fetchBin(RESUME_BIN_ID);
        res.json(data);
    } catch (error) {
        console.error('Error fetching resume data:', error);
        res.status(500).json({ error: 'Failed to fetch resume data' });
    }
});

// Update Home Data
app.post('/api/save/home-data', async (req, res) => {
    try {
        const newData = req.body;
        await updateBin(HOME_BIN_ID, newData);
        console.log('Successfully updated home-data.json on JSONBin');
        res.status(200).json({ message: 'Home data updated successfully' });
    } catch (error) {
        console.error('Error updating home-data:', error);
        res.status(500).json({ error: 'Failed to update home data' });
    }
});

// Update Resume Data
app.post('/api/save/resume-data', async (req, res) => {
    try {
        const newData = req.body;
        await updateBin(RESUME_BIN_ID, newData);
        console.log('Successfully updated resume-data.json on JSONBin');
        res.status(200).json({ message: 'Resume data updated successfully' });
    } catch (error) {
        console.error('Error updating resume-data:', error);
        res.status(500).json({ error: 'Failed to update resume data' });
    }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
