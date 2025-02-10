import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="font-sans">
      <Component {...pageProps} />;
    </div>
  );
}
