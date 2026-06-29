import { Entity } from "./Entity";

export class Scene {
  private entities: Entity[];

  constructor() {
    this.entities = [];
  }


  addEntity(entity: Entity): void {
    this.entities.push(entity);
  }


  removeEntity(id: number): void {
    this.entities = this.entities.filter(
      (entity) => entity.id !== id
    );
  }


  getEntities(): Entity[] {
    return this.entities;
  }

  /**
   * Find an entity by its ID.
   */
  getEntityById(id: number): Entity | undefined {
    return this.entities.find(
      (entity) => entity.id === id
    );
  }

  /**
   * Remove all entities from the scene.
   */
  clear(): void {
    this.entities = [];
  }

  /**
   * Returns the total number of entities.
   */
  getEntityCount(): number {
    return this.entities.length;
  }
}