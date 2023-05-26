import React from 'react'
import { Link } from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'
const Single = () => {
     return (
     <div className='single'>
          <div className="content">
               <img src="https://picsum.photos/id/25/5000/3333" alt="" />
               <div className='user'>
                    <img src="https://picsum.photos/id/65/4912/3264" alt="" />
                    <div className="info">
                         <span>John</span>
                         <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                         <Link to={`/write?edit=2`}>
                         <img src={Edit} alt="" />
                         </Link>
                         <Link>
                         <img src={Delete} alt="" />
                         </Link>
                    </div>
               </div>
               <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat sit natus, ipsam .</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi optio amet, voluptatum facere blanditiis hic minus maiores odio qui temporibus, ullam sint ducimus ex tempora quasi iste architecto veniam possimus? Expedita blanditiis, numquam, molestias maiores aperiam aut iste laudantium amet odit eum porro et officiis consequatur. Libero eos voluptates praesentium, itaque laudantium soluta architecto. Minus, iure explicabo. Eveniet qui assumenda optio similique commodi pariatur sequi id voluptatum reprehenderit, hic voluptatibus sint consequuntur possimus adipisci quod! Ipsum excepturi aspernatur, aut soluta impedit voluptatibus ratione doloribus recusandae reprehenderit placeat illo illum quod at perferendis adipisci. Nulla amet nihil obcaecati facere earum necessitatibus! <br /> <br />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, repellat! Eius sunt hic aperiam pariatur animi? Reiciendis illo fuga fugiat dolores delectus, impedit, eos alias veniam quo quas cupiditate animi rem voluptate sequi eveniet quidem ducimus cumque, odio officia inventore optio aliquam eaque. Ex sit recusandae, nisi molestias, magni, ut ipsam repudiandae commodi quis culpa similique eum quam! Labore veniam cumque magni veritatis pariatur distinctio tenetur, asperiores nostrum consectetur placeat?  <br /><br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. In aliquam distinctio sint cupiditate id a quas facilis! Sint aut dolorem blanditiis temporibus vel. Culpa, fuga. Quo voluptates quam doloremque error eos inventore, omnis quasi minus magnam. Ullam necessitatibus sit error animi natus eligendi saepe labore, sunt repellendus expedita quaerat dolorum reiciendis minus quis cum amet magni aspernatur odit distinctio. .</p>
          </div>
          <Menu/>
     </div>
     )
}

export default Single