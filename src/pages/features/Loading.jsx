function Loading({ message = "Loading weather data..." }) {
  return (
    <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse text-center mt-4">
      {message}
    </p>
  );
}

export default Loading;
