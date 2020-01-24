# QloudQode Angular Masterpage Module

The purpose of this module is to manage complex layouts in an easy way.

## Install

Run `npm i @qloudqode/qng-masterpage` to add the library to your project.

## How to use

Define masterpages as constant, e.g.:

    const masterpages: Array<QNgMasterpage> = [
      new QNgMasterpage('public', PublicMasterpageComponent),
      new QNgMasterpage('private', PrivateMasterpageComponent),
      new QNgMasterpage('clean', CleanMasterpageComponent)
    ];

And add `masterpage` as data attribute to your routings:

    { path: '', component: HomeComponent },
    { path: 'admin', component: ProfileComponent, data: { masterpage: 'private' } }
    { path: 'login', component: FooComponent, data: { masterpage: 'clean' } },


Add the following lines to `imports` section of your app module:

    QNgMasterpagesModule.forRoot('public', masterpages),

> Note: In the example above, if the masterpage attribute is not set, `public` masterpage will be set as default.

Add the masterpage components to `entryComponents`:

    entryComponents: [
      DefaultMasterpageComponent,
      PublicMasterpageComponent,
      SecureMasterpageComponent,
    ]
