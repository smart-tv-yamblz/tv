import React from 'react';
import Content from '../content';
import ListWrapper from '../listWrapper';
import DetailWrapper from '../detailWrapper';

const FeedPage = () => (
  <Content>
    <ListWrapper>
      Список подборок
    </ListWrapper>
    <DetailWrapper>
      Список треков в плейлисте / плеер
    </DetailWrapper>
  </Content>
);

export default FeedPage;
