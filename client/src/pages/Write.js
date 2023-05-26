import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react'
const Write = () => {
     const [value, setValue] = useState('');
     return (
          <div className="add">
               <div className="content">
                    <input type="text" name="" id="" />
                    <div className="editorContainer">
                    <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
                    </div>
               </div>
               <div className="menu">
                    <div className="item">
                         <h1>Publish</h1>
                         <span>
                              <b>Status:</b> Draft
                         </span>
                         <span>
                              <b>Visibilty:</b> Public
                         </span>
                         <input style={{ display:'none' }} type="file" name="" id="file" />
                         <label htmlFor="file" className='file'>Upload image</label>
                         <div className="buttons">
                              <button>
                                   Save as a draft
                              </button>
                              <button>
                                   Update
                              </button>
                         </div>
                    </div>
                    <div className="item">
                         <h1>Category</h1>
                         <div className="cat">
                              <input type="radio" name="art" id="art" value='art' />
                              <label htmlFor="art">Art</label>
                         </div>
                         <div className="cat">
                              <input type="radio" name="science" id="science" value='science' />
                              <label htmlFor="science">Science</label>
                         </div>
                         <div className="cat">
                              <input type="radio" name="tech" id="tech" value='tech' />
                              <label htmlFor="tech">Technology</label>
                         </div>
                         <div className="cat">
                              <input type="radio" name="cinema" id="cinema" value='cinema' />
                              <label htmlFor="cinema">Cinema</label>
                         </div>
                         <div className="cat">
                              <input type="radio" name="design" id="design" value='design' />
                              <label htmlFor="design">Design</label>
                         </div>
                         <div className="cat">
                              <input type="radio" name="food" id="food" value='food' />
                              <label htmlFor="food">Food</label>
                         </div>

                    </div>
               </div>
          </div>
     )
}

export default Write