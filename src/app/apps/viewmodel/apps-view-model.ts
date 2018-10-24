import { MethodsViewModel } from './methods-view-model';

export interface AppsViewModel {
    id: number;
    name: string;
    methods: MethodsViewModel[];
}