import Button from './components/atoms/button/Button';
import Text from './components/atoms/text/Text';

function App() {
  return (
    <>
      <div>Hello</div>
      <Button context="get in touch" variant="primary" />
      <Text
        as="h1"
        type="heading"
        context="This is a heading with h1"
        size="lg"
        highlight={[1, 3]}
      />
    </>
  );
}

export default App;
