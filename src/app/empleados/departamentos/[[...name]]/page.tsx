import React from "react";

export default async function DepartamentosPage({ params }: { params: { name:[]}}) {
  const { name } = await params;
  return (
    <div>
      <h1 className="text-2xl font-bold">Empleados del Depto. Desarrollo</h1>
      <ul>
        {
          name?.map((el, idx) => (<li key={idx}>{el}</li>
        ))}
      </ul>
    </div>
  );
}