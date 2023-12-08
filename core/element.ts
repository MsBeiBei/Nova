export interface Element {
  id: string;
  name: string;
  icon: string;
  type: string;
  label: string;
  desc?: string;
}

export abstract class BaseElement implements Element {
  abstract id: string;

  abstract name: string;

  abstract icon: string;

  abstract type: string;

  abstract label: string;
}
