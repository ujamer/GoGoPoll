FlowRouter.route('/', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <Home />
    });
  }
});

FlowRouter.route('/create', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <Create />
    });
  }
});

FlowRouter.route('/results/:_id', {
  action: function(params, queryParams) {
    ReactLayout.render(MainLayout, {
      content: <Results />
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
