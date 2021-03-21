import {Route} from 'react-router-dom';
import Article from '../pages/Article';
import Gallery from '../pages/Gallery';
import Pobierowo from '../pages/Pobierowo';
import Pricing from '../pages/Pricing';
import Contact from '../pages/Contact';

const Main = (props) =>{
    const {lang,images,tables,svg} = props;
    return <main>
        <Route exact path='/(|article)'>
          <Article lang={lang.Article} images={images.Article}></Article>
        </Route>
        <Route exact path='/facility'>
          <Gallery lang={lang.Gallery.Facility} images={images.Gallery.Facility} id="facility"></Gallery>
        </Route>
        <Route exact path='/cottages'>
          <Gallery lang={lang.Gallery.Cottages} images={images.Gallery.Cottages} id="cottages"></Gallery>
        </Route>
        <Route exact path='/spa'>
          <Gallery lang={lang.Gallery.Spa} images={images.Gallery.Spa} id="spa"></Gallery>
        </Route>
        <Route exact path='/rooms'>
          <Gallery lang={lang.Gallery.Rooms} images={images.Gallery.Rooms} id="rooms"></Gallery>
        </Route>
        <Route exact path='/pobierowo'>
          <Pobierowo lang={lang.Pobierowo}></Pobierowo>
        </Route>
        <Route exact path='/pricing'>
          <Pricing lang={lang.Pricing} tables={tables}></Pricing>
        </Route>
        <Route exact path='/contact'>
          <Contact lang={lang.Contact} svg={svg[0]}></Contact>
        </Route>
    </main>
}




export default Main;