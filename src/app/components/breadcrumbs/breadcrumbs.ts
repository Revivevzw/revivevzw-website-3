import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Breadcrumb {
    label: string;
    url: string;
}

@Component({
    selector: 'app-breadcrumbs',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './breadcrumbs.html',
    styleUrl: './breadcrumbs.css'
})
export class Breadcrumbs implements OnInit {
    breadcrumbs: Breadcrumb[] = [];

    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            this.generateBreadcrumbs();
        });

        // Initial generation
        if (this.router.url === '/') {
            this.breadcrumbs = [];
        } else {
            this.generateBreadcrumbs();
        }
    }

    private generateBreadcrumbs() {
        if (this.router.url === '/') {
            this.breadcrumbs = [];
            return;
        }
        const root = this.activatedRoute.root;
        const crumbs = this.createBreadcrumbs(root);

        // Always start with Home, but avoid duplication if the first crumb is Home
        const homeCrumb = { label: 'Home', url: '/' };

        if (crumbs.length > 0 && crumbs[0].label === 'Home') {
            this.breadcrumbs = crumbs;
        } else {
            this.breadcrumbs = [homeCrumb, ...crumbs];
        }
    }

    private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
        const children: ActivatedRoute[] = route.children;

        if (children.length === 0) {
            return breadcrumbs;
        }

        for (const child of children) {
            const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
            if (routeURL !== '') {
                url += `/${routeURL}`;
            }

            const label = child.snapshot.data['breadcrumb'];
            if (label) {
                breadcrumbs.push({ label, url });
            }

            return this.createBreadcrumbs(child, url, breadcrumbs);
        }

        return breadcrumbs;
    }
}
