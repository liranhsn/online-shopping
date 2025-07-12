import { config } from 'dotenv';

config();

export default {
    // import all env variables for example:
    PORT: process.env.PORT || 8080,
    environment: process.env.environment || 'dev',
    MONGO_URI:
        process.env.MONGO_URI ||
        'mongodb+srv://pmuser:pmuser123@cluster0.whkhdjf.mongodb.net/?retryWrites=true&w=majority',
    PASSWORD_SECRET:
        process.env.environment || 'pppppppppppppppppppppppppppppppp',
};
