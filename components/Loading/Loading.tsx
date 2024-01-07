import {dotStream} from 'ldrs';
import {FC} from 'react';

const Loading: FC = () => {
  dotStream.register();
  return <l-dot-stream size='100' speed='2.5' color='black'></l-dot-stream>;
};
export default Loading;
