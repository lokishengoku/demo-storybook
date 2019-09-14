import React from 'react'; 
import { storiesOf } from '@storybook/react'; 
import '@storybook/addon-info';
import Card from '../src/components/card'; 

storiesOf('Card', module) 
    .add('default', 				//tên phiên bản (thêm phiên bản thì thêm .add)
         () => ( 
            <Card src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Kimetsu_no_Yaiba_Blu-ray_Disc_Box_1_art.jpg/220px-Kimetsu_no_Yaiba_Blu-ray_Disc_Box_1_art.jpg" 
              mainContent="Tanjiro Kamado"
              description="Tanjiro Kamado (竈門かまど炭たん治じ郎ろう Kamado Tanjirō?) is the main protagonist of the manga and anime, Demon Slayer: Kimetsu no Yaiba."
              />
         )); 
