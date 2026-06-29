import { Scene } from "../core/Scene";
import { Entity } from "../core/Entity";

export class SceneManager {
  private scene: Scene;

  constructor() {
    this.scene = new Scene();
  }

  /**
   * Returns the current scene.
   */
  getScene(): Scene {
    return this.scene;
  }

  /**
   * Creates a new empty scene.
   */
  newScene(): void {
    this.scene = new Scene();
  }

  /**
   * Adds an entity to the scene.
   */
  addEntity(entity: Entity): void {
    this.scene.addEntity(entity);
  }

  /**
   * Removes an entity from the scene.
   */
  removeEntity(id: number): void {
    this.scene.removeEntity(id);
  }

  /**
   * Returns all entities.
   */
  getEntities(): Entity[] {
    return this.scene.getEntities();
  }

  /**
   * Finds an entity by ID.
   */
  getEntityById(id: number): Entity | undefined {
    return this.scene.getEntityById(id);
  }

  /**
   * Clears the scene.
   */
  clearScene(): void {
    this.scene.clear();
  }

  /**
   * Returns the number of entities.
   */
  getEntityCount(): number {
    return this.scene.getEntityCount();
  }
}