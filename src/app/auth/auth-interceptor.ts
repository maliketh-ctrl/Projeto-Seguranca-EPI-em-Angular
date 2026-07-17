import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  // Busca token
  const token = localStorage.getItem('token');
  // Clona requisição adicionando header se houver token
  const reqClone = token
    ? req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    : req;
  return next(reqClone).pipe(
    // aqui entra a mudança
    catchError((error) => {
      console.error('Erro HTTP:', error);
      // Se for erro 401 (não autorizado)
      if (error.status === 401) {
        router.navigate(['/unauthorized']);
      }
      return throwError(() => error);
    })
  );
};