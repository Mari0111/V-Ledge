import * as React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Grid } from "@mui/material";
// import { Link } from "@mui/material";
import Link from "next/link";

export default function Classroom() {
  
    return (
        <div>
            <h1 style={{ color: "black", textAlign: "center" }}>Анги</h1>
            <Grid paddingLeft={45}>
            <Link href={"https://meet.google.com/bqk-keiq-bmu"}>
            <ImageList sx={{ width: 800, height: 800,}}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>Багш: {item.author}</span>}
            position="below"
            
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Link>
    </Grid>
        </div>

    );
}
const itemData = [
    {
      img: 'https://www.21clhk.org/wp-content/uploads/2020/12/Creativity-in-Mathematics.png',
      title: '201 МАТЕМАТИК',
      author: 'Ж. Тамир',
    },
    {
      img: 'http://azharandgenghiskhan.weebly.com/uploads/5/8/4/9/58490427/3443592_orig.jpg',
      title: '202 МОНГОЛ ХЭЛ',
      author: 'У. Туяа',
    },
    {
      img: 'https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-1.1.0&rect=0%2C70%2C7875%2C5667&q=45&auto=format&w=926&fit=clip',
      title: '203 ФИЗИК',
      author: 'Ө. Саруул',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Japanese_language.svg/2560px-Japanese_language.svg.png',
      title: '204 Япон хэл',
      author: 'Мисато',
    },
    {
      img: 'https://play-lh.googleusercontent.com/EoiTA0z1LdQHV2huvNc2NxXVquqAlOrwweONKMYjTYNYPK2KMQMOBR253NC6WsFm-dZl',
      title: '205 ЭРҮҮЛ МЭНД',
      author: 'А. Баясал',
    },
    {
      img: 'https://nycancer.com/media/images/2019/10/22/Physical_activity.JPG',
      title: '401 Биен тамир',
      author: 'У. Болд',
    },
    {
      img: 'https://i0.wp.com/ritajms.com/wp-content/uploads/2019/11/52351011-english-british-england-language-education-concept.jpg?fit=1300%2C959&ssl=1',
      title: '206 Англи хэл',
      author: 'Алекс',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Computer-science-education.jpg/1200px-Computer-science-education.jpg',
      title: '207 Мэдээлэл зүй',
      author: 'Э. Эрдэнэ',
    },
    {
      img: 'https://thumbs.dreamstime.com/z/art-class-workshop-template-design-kids-craft-education-creativity-concept-vector-illustration-146270966.jpg',
      title: '208 Дүрслэх урлаг',
      author: 'Ц. Билгүүн',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/ChessSet.jpg',
      title: '209 Шатар дугуйлан',
      author: 'Ж. Бат',
    },
    {
      img: 'https://thumbs.dreamstime.com/b/music-sheet-vintage-old-music-notes-paper-63477584.jpg',
      title: '301 Төгөлдөр хуур дугуйлан',
      author: 'О. Мөнхчимэг',
    },
    {
      img: 'https://images.theconversation.com/files/430015/original/file-20211103-27-1gojlp9.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
      title: '302 Бүжиг дугуйлан',
      author: 'У. Аялгуу',
    },
  ];