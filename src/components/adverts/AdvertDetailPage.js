import { NodepopLayout } from '../layout/NodepopLayout';

const AdvertDetailPage = (props, { match }) => {
  console.log(`🚀  FRG 🚀 ~ AdvertDetailPage ~ routeProps:`, match);
  console.log(`🚀  FRG 🚀 ~ AdvertDetailPage ~ routeProps:`, props);

  // React.useEffect(() => {
  //   const { match } = routeProps
  //   getTweetDetail(match.params.tweetId)
  //     .then(tweet => this.setState({ tweet }))
  //     .catch(error => this.setState({ error }));
  // });

  // useEffect(() => {
  //   const getUsuario = async () => {
  //     // pasamos el nombre del usuario a la petición
  //     const url = `https://api.github.com/users/${props.match.params.nombre}`;
  //     const { data } = await axios(url);

  //     setUsuario(data);
  //   };
  // }, []);

  return (
    <NodepopLayout {...props}>
      <p>This is the AdvertDetailPage component</p>
    </NodepopLayout>
  );
};

export default AdvertDetailPage;
