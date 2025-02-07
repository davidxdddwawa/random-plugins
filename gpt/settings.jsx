const {
  plugin: { store },
  ui: { TextBox, Text },
} = shelter;

export default () => (
  <>
    <Text>Ollama Model</Text>
    <TextBox
      placeholder="deepseek-r1:1.5b"
      value={store.model || "deepseek-r1:1.5b"}
      onInput={(value) => {
        store.model = value;
      }}
    />
  </>
);