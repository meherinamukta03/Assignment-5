

import { use } from 'react';
import type IdataType from '../Types/dataType';
import Card from './Card';

type TechnologyProps = {
  DataPromise: Promise<IdataType[]>;
};


const Technology= ({DataPromise} :TechnologyProps)=> {


    const CardInfo=use(DataPromise)
    return (
        <div >
        <div>
      <h1 className="text-5xl font-bold mx-15">
      Explore The<span className=' text-pink-600'> Technologies</span>
      </h1>
        <p className='text-gray-500 mx-15 mt-3 font-'>Pick one technology per category to build your ideal stack</p>

        </div>

          
      <Card CardInfo={CardInfo}></Card>





        </div>
    );
};

export default Technology




;