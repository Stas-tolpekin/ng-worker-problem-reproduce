import {first, map, of} from 'rxjs';

of(null).pipe(
  map(() => 'test'),
  first(),
).subscribe((x) => console.log(x));
