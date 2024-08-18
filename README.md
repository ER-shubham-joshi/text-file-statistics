# Text File Statistics Application

## Overview

The Text File Statistics Application allows users to upload a text file and receive detailed statistics about its content. The application provides the following statistics:
1. Number of words in the text file.
2. Number of letters in the text file.
3. Number of symbols in the text file.
4. Top three most common words.
5. Top three most common letters.

## Technologies Used

- **Frontend**: React for a dynamic and responsive user interface.
- **Backend**: Node.js with Express for file handling and processing.
- **File Handling**: Multer for handling file uploads.
- **Testing**: Jest for backend testing and React Testing Library for frontend testing.

## How It Works

### Server Side

1. **Setup**: Uses Express and Multer to manage file uploads and storage.
2. **File Handling**: Uploaded files are stored and then read for processing.
3. **Text Processing**:
   - **Normalization**: Converts text to lowercase and removes punctuation.
   - **Word Count**: Splits the text into words and excludes numbers.
   - **Letter Count**: Counts occurrences of each letter.
   - **Symbol Count**: Counts symbols by excluding alphanumeric characters and spaces.
   - **Top Words & Letters**: Identifies the top three most frequent words and letters.

### Frontend

1. **File Upload**: Provides an interface for users to upload text files.
2. **Display**: Shows a loading indicator, error messages, and the statistics once the file is processed.

## Running the Application

### Backend

1. Navigate to the `server` directory:
    ```bash
    cd server
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start
    ```
   The backend server will be running at `http://localhost:5000`.

### Frontend

1. Navigate to the `client` directory:
    ```bash
    cd client
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```
   The frontend application will be accessible at `http://localhost:3000`.

## Testing

### Backend Testing

1. Navigate to the `server` directory:
    ```bash
    cd server
    ```

2. Run backend tests:
    ```bash
    npm test
    ```

   Backend tests use Jest and Supertest to verify API functionality.

### Frontend Testing

1. Navigate to the `client` directory:
    ```bash
    cd client
    ```

2. Run frontend tests:
    ```bash
    npm test
    ```

   Frontend tests use React Testing Library to ensure component behavior and UI interactions.

## Design Choices

- **React**: Used for its component-based architecture and efficient updates.
- **Express**: Chosen for its simplicity and flexibility in handling API requests.
- **Multer**: Utilized for managing file uploads in a straightforward manner.
- **Jest**: Preferred for its robust testing framework for the backend.
- **React Testing Library**: Used for testing React components with a focus on user interactions.

## Error Handling

- **Server**: Handles errors such as unsupported file types, file size limits, and internal server issues. The server responds with appropriate error messages.
- **Client**: Displays user-friendly error messages based on the server responses.

## Additional Notes

- Ensure both the server and frontend are running simultaneously for full application functionality.
- The frontend communicates with the backend via POST requests to `http://localhost:5000/upload`.

## How It Works

![text-file-statistics](https://github.com/user-attachments/assets/fca31b58-27f4-4f9b-8718-5369fffa8b22)

