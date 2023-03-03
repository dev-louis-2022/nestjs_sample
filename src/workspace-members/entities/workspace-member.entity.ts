import { CUDate } from '../../common/entities/CUDate.entity';
import { User } from '../../users/entities/user.entity';
import { Workspace } from '../../workspaces/entities/workspace.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'sleact', name: 'workspaceMember' })
export class WorkspaceMember extends CUDate {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;
  @Column({ type: 'int', name: 'userId' })
  userId: number;
  @Column({ type: 'int', name: 'workspaceId' })
  workspaceId: number;
  @Column({ type: 'date', name: 'loggedInAt' })
  loggedInAt: Date;

  @ManyToOne(() => User, (user) => user.Workspaces, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  User: User;

  @ManyToOne(() => Workspace, (workspace) => workspace.Members, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'workspaceId', referencedColumnName: 'id' }])
  Workspace: Workspace;
}