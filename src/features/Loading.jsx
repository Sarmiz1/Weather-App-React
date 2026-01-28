function Loading({ text = "Loading weather data..." }) {
  return (
    <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse text-center mt-4">
      {text}
    </p>
  );
}

export default Loading;
