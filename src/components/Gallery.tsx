export default function Gallery() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      <div className="space-y-2">
        <img
          className="w-full h-auto object-cover"
          src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Image Description"
        />
      </div>
      <div className="space-y-2">
        <img
          className="w-full h-auto object-cover"
          src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          alt="Image Description"
        />
      </div>
      <div className="space-y-2">
        <img
          className="w-full h-auto object-cover"
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Image Description"
        />
      </div>
      <div className="space-y-2">
        <img
          className="w-full h-auto object-cover"
          src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
          alt="Image Description"
        />
      </div>
    </div>
  );
}
