import logging
from datetime import datetime

# Configure logging
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)

logger = logging.getLogger(__name__)


def log_info(message: str):
    logger.info(f"[{datetime.utcnow()}] {message}")


def log_error(message: str, error: Exception = None):
    if error:
        logger.error(f"[{datetime.utcnow()}] {message}: {str(error)}")
    else:
        logger.error(f"[{datetime.utcnow()}] {message}")


def log_warning(message: str):
    logger.warning(f"[{datetime.utcnow()}] {message}")
