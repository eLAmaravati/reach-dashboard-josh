import { useState } from 'react';
import YoutubeEmbed from '../components/YoutubeVideo';

export default function CourseReact() {
  const [key, setKey] = useState('Course React');

  return (
    <>
    <div id="course-react" className='page'>
       <YoutubeEmbed embedId="kcnwI_5nKyA?si=XizQN556wiOD0FBI" />

      <div className="page__header mt--50 card-custom">
        <h1 className="section__title">Tutorial React untuk Pemula</h1>
        <p className="page__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus architecto voluptate ea quas nam molestiae voluptatem. Consequuntur omnis eius aliquam cupiditate aliquid iste ipsa culpa sapiente provident commodi? Harum eligendi temporibus dignissimos deleniti unde at rerum reprehenderit sit necessitatibus magnam!</p>
      </div>

    </div>
    </>
  );
}