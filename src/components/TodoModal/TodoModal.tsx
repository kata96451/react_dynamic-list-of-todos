import React, { useState, useEffect } from 'react';
import { getUser } from '../../api';
import { Todo } from '../../types/Todo';
import { User } from '../../types/User';
import { Loader } from '../Loader';

interface Props {
  isSelected: boolean,
  isLoaded: boolean,
  setIsLoaded: (isLoaded: boolean) => void,
  setIsSelected: (isSelected: boolean) => void,
  selectedTodoId: number | null,
  todos: Todo[],
}

export const TodoModal: React.FC<Props> = ({
  isSelected,
  isLoaded,
  setIsLoaded,
  setIsSelected,
  selectedTodoId,
  todos,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const selectedTodo = todos.find(todo => todo.id === selectedTodoId);

  const handleClickClose = () => {
    setIsLoaded(false);
    setIsSelected(false);
  };

  useEffect(() => {
    if (selectedTodo) {
      getUser(selectedTodo.userId).then(uselUsers => setUser(uselUsers));
    }
  }, [selectedTodoId]);

  return (
    <>
      {isSelected && (
        <div className="modal is-active" data-cy="modal">
          <div className="modal-background" />

          {!isLoaded ? (
            <Loader />
          ) : (
            <div className="modal-card">
              <header className="modal-card-head">
                <div
                  className="modal-card-title has-text-weight-medium"
                  data-cy="modal-header"
                >
                  {`Todo #${selectedTodo?.id}`}
                </div>
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  type="button"
                  className="delete"
                  data-cy="modal-close"
                  onClick={handleClickClose}
                />
              </header>

              <div className="modal-card-body">
                <p className="block" data-cy="modal-title">
                  {selectedTodo?.title}
                </p>

                <p className="block" data-cy="modal-user">
                  {selectedTodo?.completed
                    ? <strong className="has-text-success">Done</strong>
                    : <strong className="has-text-danger">Planned</strong>}

                  {' by '}

                  <a href={`mailto:${user?.email}`}>
                    {user?.name}
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
