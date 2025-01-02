const StorePagesLayout = ({ children }) => {
  return (
    <main className={`h-screen overflow-y-auto bg-store-texture bg-cover`}>
      {children}
    </main>
  );
};

export default StorePagesLayout;
