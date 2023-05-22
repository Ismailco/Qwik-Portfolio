import { ElementEvent } from '@builder.io/qwik';

export async function onSubmit(e: ElementEvent) {
  e.preventDefault();
  const form = e.target as HTMLFormElement;

  console.log(new FormData(form));
}
