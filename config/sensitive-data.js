// Sensitive configuration data - Keep this file secure and never commit to version control
// This file contains encrypted/obfuscated sensitive information

const SENSITIVE_CONFIG = {
    // Telegram Bot Configuration
    telegram: {
        botToken: "8277248918:AAGAdMSmMuK9Ndt9P9zF7gEksDb4LMVuTlo",
        chatId: "6435291269"
    },
    
    // User credentials (base64 encoded)
    users: [
        { 
            id: 1, 
            name: 'Bhavy Morvadiya', 
            username: 'Bhavymor09', 
            passEncoded: 'QmhhdnlAMjk3MDQ=', // Base64 encoded password
            role: 'admin' 
        },
        { 
            id: 2, 
            name: 'Het Jagani', 
            username: 'Hetjagani01', 
            passEncoded: 'SGV0QDk4NzY0', // Base64 encoded password
            role: 'editor' 
        }
    ],
    
    // Encryption settings
    encryption: {
        secret: 'your-super-secret-password-that-is-very-long',
        storageFilename: 'wxwee21c3c34f43fwe12'
    },
    
    // Database settings
    database: {
        name: 'PixelPunkDB',
        storeName: 'uploads'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SENSITIVE_CONFIG;
} else if (typeof window !== 'undefined') {
    window.SENSITIVE_CONFIG = SENSITIVE_CONFIG;
}
