import { NodepopLayout } from './../layout/NodepopLayout';

const NotFoundPage = props => {
  return (
    <NodepopLayout {...props}>
      <p>This is the Not Found Page</p>
    </NodepopLayout>
  );
};

//TODO: NotFoundPage.propTypes = {};
export default NotFoundPage;
