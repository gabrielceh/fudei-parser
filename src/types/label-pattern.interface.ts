export type LabelPattern<TModel> = {
  key: keyof TModel;
  pattern: string;
};