FlowRouter.route('/', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <Home />
    });
  }
});

FlowRouter.route('/new', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <New />
    });
  }
});

FlowRouter.route('/results/:_id', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <Results resultId={params._id}/>
    });
  }
});

FlowRouter.route('/:_id', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <Poll pollId={params._id} />
    });
  }
});
