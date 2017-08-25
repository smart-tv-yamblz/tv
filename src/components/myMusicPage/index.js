import React from 'react';
import Content from '../content';
import ListWrapper from '../listWrapper';
import DetailWrapper from '../detailWrapper';

const MyMusicPage = () => (
  <Content>
    <ListWrapper>
      Список плейлистов
    </ListWrapper>
    <DetailWrapper>
      Список треков в плейлисте
    </DetailWrapper>
  </Content>
);

export default MyMusicPage;
