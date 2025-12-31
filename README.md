# bakery-entities

This package provides TypeORM entity definitions for the Bakery project. You can use these entities in your NestJS or TypeORM-based projects.

## Installation

To use these entities in another project, follow these steps:

### 1. Install via GitHub

Add the following to your project's `package.json` dependencies:

```
"dependencies": {
  "bakery-entities": "git+https://github.com/<your-github-username>/bakery-entities.git"
}
```

Or install directly:

```
npm install git+https://github.com/<your-github-username>/bakery-entities.git
```

Replace `<your-github-username>` with your actual GitHub username.

### 2. Import Entities

In your project, import entities as needed:

```
import { BaseEntity } from 'bakery-entities/src/base/base.entity';
import { ArtisanEntity } from 'bakery-entities/src/entities/artisan-management/artisan.entity';
// ...other imports
```

### 3. TypeORM Configuration

Add the entities to your TypeORM configuration:

```
import { ArtisanEntity, CakeEntity, ... } from 'bakery-entities/src/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ArtisanEntity,
      CakeEntity,
      // ...other entities
    ]),
  ],
})
export class YourModule {}
```

### 4. Install Peer Dependencies

Make sure your project has the following dependencies installed:

- typeorm
- @nestjs/common (if using NestJS)
- @nestjs/swagger (if using Swagger decorators)

Install them with:

```
npm install typeorm @nestjs/common @nestjs/swagger
```

## Development

- Clone this repository
- Make changes in the `src` folder
- Push updates to GitHub

## License

See LICENSE for details.