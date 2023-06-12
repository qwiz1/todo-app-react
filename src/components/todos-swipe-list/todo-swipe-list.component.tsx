import React from 'react';
import { Todo } from 'src/common/types';
import { TodoItem } from '../todo-item';
import {
  ListSwiper,
  SwiperPrimaryContainer,
  SwiperSlideItem,
} from './todo-swipe-list.styled';
import 'swiper/css';
import 'swiper/css/pagination';

type Props = {
  todos: Todo[];
};

const TodoSwipeList: React.FC<Props> = ({ todos }) => (
  <SwiperPrimaryContainer>
    <ListSwiper slidesPerView={1} spaceBetween={200}>
      {todos.map((todo) => (
        <SwiperSlideItem key={todo.id}>
          <TodoItem todo={todo} />
        </SwiperSlideItem>
      ))}
    </ListSwiper>
  </SwiperPrimaryContainer>
);

export { TodoSwipeList };
