// STYLED components
import { Wrapper, ImageActive, ImageList, ImagePreview } from '../styles/Preview';

const Info = () => {
  return (
    <Wrapper>
      <ImageList>
        <ImagePreview
          src="https://images.unsplash.com/photo-1586250127208-8218b38ff1cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt=""
        />
        <ImagePreview
          src="https://images.unsplash.com/photo-1569466126773-842a038eae3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt=""
        />
        <ImagePreview
          src="https://images.unsplash.com/photo-1589863008985-e7084c00e272?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
          alt=""
        />
        <ImagePreview
          src="https://images.unsplash.com/photo-1513240794845-9add4d6a3b5e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
          alt=""
        />
        <ImagePreview
          src="https://images.unsplash.com/photo-1587685961705-c56800065b60?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
          alt=""
        />
        <ImagePreview
          src="https://images.unsplash.com/photo-1585077649669-0a8c1e66c282?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1566&q=80"
          alt=""
        />
      </ImageList>
      <ImageActive
        src="https://images.unsplash.com/photo-1575783970733-1aaedde1db74?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2855&q=80"
        alt=""
      />
    </Wrapper>
  );
};

export default Info;