import React,{useState,useEffect} from 'react';
import "./styles.css";
function Counter() {
    const [text, setText] = useState('');

  // word count
  const [wordCount, setWordCount] = useState(0);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {

    const words = text.split(' ');
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);

  }, [text]);
  return (
    <div>
       <div className='container'>
      <h1>Responsive Paragraph Word 
           <br />Counter </h1>
      <div>
        <textarea
          value={text}
          onChange={changeHandler}
          placeholder=''
        ></textarea>

        <div>
          <p className='word-count'>Word Count: {wordCount}</p>
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default Counter;