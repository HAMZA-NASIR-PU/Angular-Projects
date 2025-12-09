# Mini MatSort: Your First `ViewChild` `EventEmitter` Directive - Task-8

To understand how the `sortChange` of `MatSort` works.

```typescript
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';

// A directive
@ViewChild(MatSort) sort!: MatSort;

this.sort.sortChange.subscribe((res:Sort) => {
    this.fetchData();
});

// A component
@ViewChild(MatPaginator) paginator!: MatPaginator;
this.paginator.page.subscribe((res:PageEvent) => {
    this.fetchData();
});
```

(Sort Code)[https://github.com/angular/components/blob/main/src/material/sort/sort.ts]


(Paginator Code)[https://github.com/angular/components/blob/main/src/material/paginator/paginator.ts]