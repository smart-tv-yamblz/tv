import React from 'react';
import Content from '../../components/content/index';
import ListWrapper from '../../components/listWrapper/index';
import DetailWrapper from '../../components/detailWrapper/index';

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
