import React from 'react';
import Content from '../../components/content/index';
import ListWrapper from '../../components/listWrapper/index';
import DetailWrapper from '../../components/detailWrapper/index';

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
