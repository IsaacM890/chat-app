/** @format */
import { ChatEngine } from 'react-chat-engine';
import './App.css';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName='itzhak123'
      userSecret={process.env.REACT_APP_USER_SECRET}
    />
  );
};

export default App;
