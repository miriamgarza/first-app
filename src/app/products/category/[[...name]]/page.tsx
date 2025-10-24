import React from "react";

export default async function CategoryPage({ params }: { params: { name:[]}}) {
  const { name } = await params;
  return (
    <div>
      <h1 className="text-2xl font-bold">Categorias</h1>
      <ul>
        {
          name?.map((el, idx) => (<li key={idx}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
