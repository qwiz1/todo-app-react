import React from 'react';
import { Todo } from 'src/common/types';
import { TodoItem } from '../todo-item';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperContainer } from './todo-swipe-list.styled';
import 'swiper/css';
import 'swiper/css/pagination';

type Props = {
  todos: Todo[];
};

const TodoSwipeList: React.FC<Props> = ({ todos }) => (
  <SwiperContainer>
    <Swiper slidesPerView={1} spaceBetween={200}>
      {todos.map((todo) => (
        <SwiperSlide key={todo.id}>
          <TodoItem todo={todo} />
        </SwiperSlide>
      ))}
    </Swiper>
  </SwiperContainer>
);

export { TodoSwipeList };
