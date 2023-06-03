import './App.css';

function App() {
  return (
    <div className="App">
      <div className='side'>
        <button>New Chat</button>
        {/* the ul is for the sidebar and to keep track pf chats  */}
        <ul>
          <li>sdafdsa</li>
        </ul>
        <nav>
          <p>created by Gaby</p>
        </nav>
      </div>
      <div className='main'>
        <h1>Gaby's being Gabby</h1>
        <ul className='feed'></ul>
        <div className='bottom'>
          <div className='inputArea'>
            <input/>
            <button>submit</button>
          </div>
          <p className='info'>  </p>
        </div>
      </div>
    </div>
  );
}

export default App;
