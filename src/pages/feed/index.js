import React from 'react';
import Content from '../../components/content';
import ListWrapper from '../../components/listWrapper';
import DetailWrapper from '../../components/detailWrapper';

const Feed = () => (
  <Content>
    <ListWrapper>
      Список подборок
    </ListWrapper>
    <DetailWrapper>
      Список треков в плейлисте / плеер
    </DetailWrapper>
  </Content>
);

export default Feed;
