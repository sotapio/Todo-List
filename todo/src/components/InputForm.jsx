import React from 'react'

export const InputForm = ({ taskList, setTaskList }) => {
    
    const [inputText, setInputText] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        /* inputに打ち込んだ文字をコンソールに出力したい */
        console.log(inputText);

        /* タスクを追加する */
        setTaskList([
            /* スプレット構文を使って、text: inputTextを配列の中に入れ込む */
            ...taskList, {id:taskList.length, text: inputText, completed: false}
        ]);
        /* エンター押したら文字を消す */
        setInputText("");
    }


    /* コンソールに打った文字が表示される */
    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    return (
      <div className='inputForm'>
          <form onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange} value={inputText}/>
              <button>
              <i className="fa-solid fa-square-plus"></i>
              </button>
          </form>    
      </div>
    )
}
