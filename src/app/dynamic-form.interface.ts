// The interface is used to enforce required and optional members of the
// components used within the dynamic component.
export interface DynamicForm {
  name: string;
  email: string;
  description?: string;
  onSubmit?: any;
}
