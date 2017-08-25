import React from 'react';
import Content from '../../components/content';
import ListWrapper from '../../components/listWrapper';
import DetailWrapper from '../../components/detailWrapper';

const MyMusic = () => (
  <Content>
    <ListWrapper>
      Список плейлистов
    </ListWrapper>
    <DetailWrapper>
      Список треков в плейлисте
    </DetailWrapper>
  </Content>
);

export default MyMusic;
